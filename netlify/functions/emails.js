const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Eventualidades" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Novo Pedido de Orçamento",
      html: `
        <h2>Novo Pedido de Orçamento</h2>

        <p><strong>Nome:</strong> ${data.nome || ""}</p>
        <p><strong>Email:</strong> ${data.email || ""}</p>
        <p><strong>Telefone:</strong> ${data.telefone || ""}</p>
        <p><strong>Empresa:</strong> ${data.empresa || ""}</p>
        <p><strong>Evento:</strong> ${data.evento || ""}</p>
        <p><strong>Data:</strong> ${data.data || ""}</p>
        <p><strong>Local:</strong> ${data.local || ""}</p>
        <p><strong>Mensagem:</strong></p>

        <p>${data.mensagem || ""}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
      }),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.message,
      }),
    };
  }
};