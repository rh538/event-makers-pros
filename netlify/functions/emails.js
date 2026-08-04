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
      subject: `Novo Pedido de Orçamento - ${data.name || ""}`,
      html: `
        <h2>Novo Pedido de Orçamento</h2>

        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;">
          <tr><td><strong>Nome</strong></td><td>${data.name || ""}</td></tr>
          <tr><td><strong>Email</strong></td><td>${data.email || ""}</td></tr>
          <tr><td><strong>Telefone</strong></td><td>${data.phone || ""}</td></tr>
          <tr><td><strong>Data do evento</strong></td><td>${data.eventDate || ""}</td></tr>
          <tr><td><strong>Local</strong></td><td>${data.location || ""}</td></tr>
          <tr><td><strong>Serviços</strong></td><td>${data.services || ""}</td></tr>
        </table>

        <h3>Descrição</h3>

        <p>${(data.message || "").replace(/\n/g,"<br>")}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
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