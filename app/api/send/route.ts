import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, email, date, time, location, province, eventType, source, notes } = body;

        const data = await resend.emails.send({
            from: 'Fotolux <onboarding@resend.dev>', // If you add a custom domain to Resend later, change this.
            to: ['mario.luna.lpez@gmail.com'],
            subject: `Nueva Reserva: ${eventType} - ${name}`,
            html: `
        <h2>Nueva solicitud de reserva</h2>
        <h3>Datos Personales:</h3>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Teléfono:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Detalles del Evento:</h3>
        <ul>
          <li><strong>Fecha:</strong> ${date}</li>
          <li><strong>Horario:</strong> ${time}</li>
          <li><strong>Lugar:</strong> ${location}</li>
          <li><strong>Provincia:</strong> ${province}</li>
          <li><strong>Tipo de Evento:</strong> ${eventType}</li>
        </ul>
        <h3>Información Adicional:</h3>
        <ul>
          <li><strong>¿Cómo nos conoció?:</strong> ${source}</li>
        </ul>
        <h3>Consulta o anotación:</h3>
        <p>${notes || 'No hay anotaciones.'}</p>
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
