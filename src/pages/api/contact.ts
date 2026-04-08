import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async ({ request }: { request: Request }) => {
  try {
    const body = await request.json();
    const { nombre, email, telefono, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Aceros Saracco <onboarding@resend.dev>',
      to: 'info@acerossaracco.com',
      subject: `Nueva consulta de ${nombre}`,
      html: `
        <h2>Nueva consulta desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500 }
    );
  }
};