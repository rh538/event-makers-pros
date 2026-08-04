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
  from: `"Eventualidades" <${process.env.EMAIL_FROM}>`,
  to: data.email,
  subject: "Recebemos o seu pedido de orçamento",
  html: `
  <div style="max-width:700px;margin:auto;font-family:Arial,Helvetica,sans-serif;background:#ffffff;border:1px solid #e5e5e5;">

    <div style="background:#111;padding:35px;text-align:center;">
      <h1 style="color:#fff;margin:0;font-size:30px;">EVENTUALIDADES</h1>
      <p style="color:#d4af37;margin-top:8px;font-size:14px;">
        Produção de Eventos • Gestão de Bares • Aluguer de Equipamentos
      </p>
    </div>

    <div style="padding:40px;color:#333;">

      <h2 style="margin-top:0;">
        Olá ${data.nome},
      </h2>

      <p>
        Obrigado pelo seu contacto.
      </p>

      <p>
        Confirmamos que recebemos o seu pedido de orçamento.
      </p>

      <p>
        A nossa equipa irá analisá-lo e responder-lhe no prazo máximo de
        <strong>48 horas úteis</strong>.
      </p>

      <h3 style="margin-top:35px;">Resumo do Pedido</h3>

      <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;border:1px solid #ddd;">
        <tr>
          <td style="background:#f7f7f7;"><strong>Serviços</strong></td>
          <td>${data.evento || "-"}</td>
        </tr>
        <tr>
          <td style="background:#f7f7f7;"><strong>Data</strong></td>
          <td>${data.data || "-"}</td>
        </tr>
        <tr>
          <td style="background:#f7f7f7;"><strong>Local</strong></td>
          <td>${data.local || "-"}</td>
        </tr>
        <tr>
          <td style="background:#f7f7f7;"><strong>Participantes</strong></td>
          <td>${data.participantes || "-"}</td>
        </tr>
      </table>

      <div style="margin:40px 0;text-align:center;">
        <a href="https://eventualidades.pt"
           style="background:#111;color:#fff;padding:15px 30px;text-decoration:none;border-radius:6px;font-weight:bold;">
           Visitar o nosso Website
        </a>
      </div>

      <p>
        Se pretender acrescentar alguma informação ao seu pedido,
        basta responder a este email.
      </p>

      <br>

      <strong>Com os melhores cumprimentos,</strong><br><br>

      <strong>Eventualidades</strong><br>
      Produção de Eventos<br>
      Gestão de Bares<br>
      Aluguer de Equipamentos<br>
      Agenciamento Artístico<br><br>

      📧 catarinavieira@eventualidades.pt<br>
      🌐 https://eventualidades.pt

    </div>

    <div style="background:#111;color:#bbb;padding:20px;text-align:center;font-size:12px;">
      © ${new Date().getFullYear()} Eventualidades. Todos os direitos reservados.
    </div>

  </div>
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