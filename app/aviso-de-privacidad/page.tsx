import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { site, siteUrl } from "../company";
import { BrandLogo, SiteFooter } from "../site-chrome";

export const metadata: Metadata = {
  title: "Aviso de privacidad | BE Excellent Energy",
  description:
    "Aviso de privacidad de BE Excellent Energy: qué datos personales solicitamos, para qué los usamos y cómo ejercer tus derechos.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

// Texto migrado del aviso publicado en el sitio anterior (be-exen.com,
// actualizado el 29 de mayo de 2020). Solo se corrigieron las referencias al
// propio sitio. PENDIENTE de revisión legal: domicilio del responsable y
// autoridad de protección de datos vigente.
const responsibleAddress =
  "Corporativo High Park Querétaro, Lic. Manuel Gómez Morin 3960, Centro Sur, 76090 Santiago de Querétaro, Qro.";
const pageUrl = `${siteUrl}/aviso-de-privacidad`;

export default function PrivacyNotice() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner header-simple">
          <Link href="/" aria-label="BE Excellent Energy, inicio">
            <BrandLogo className="brand-logo" />
          </Link>
          <Link className="header-back" href="/">
            <ArrowLeft size={17} aria-hidden="true" /> Volver al inicio
          </Link>
        </div>
      </header>

      <main className="legal-main">
        <article className="container legal-content">
          <p className="section-kicker">Legal</p>
          <h1>Aviso de privacidad</h1>
          <p className="legal-lead">
            Por favor lea cuidadosamente y acepte los términos siguientes antes
            de compartir cualquier dato personal o información con nosotros.
          </p>

          <p>
            Para los efectos de este aviso de privacidad, si usted comparte
            información con nosotros se entenderá que usted ha revisado, leído
            y aceptado los términos de este aviso de privacidad.
          </p>
          <p>
            Generalmente, usted puede acceder y navegar por nuestra página de
            Internet <Link href="/">{siteUrl}</Link> sin divulgar datos personales.
            Sin embargo, si usted quiere registrar un negocio o solicita
            información, solicita alguna aclaración, presenta alguna queja o de
            alguna forma quiere establecer comunicación o contacto con BE ExEn,
            se le podrá solicitar que proporcione datos personales. Asimismo,
            BE ExEn obtiene datos personales suyos cuando usted responde a
            cuestionarios, encuestas, funciones de búsqueda y utiliza algunas
            de las herramientas que se encuentran en nuestro sitio de Internet.
          </p>

          <h2>Responsable de sus datos personales</h2>
          <p>
            Para efectos del tratamiento de los datos personales que usted
            pudiera llegar a divulgar en nuestro sitio web, se considerará que
            el responsable de sus datos personales es BE ExEn, con domicilio en{" "}
            {responsibleAddress}
          </p>

          <h2>Datos que solicitamos</h2>
          <p>
            Al establecer contacto con nosotros a través de nuestros
            formularios, cuestionarios, o al momento de registrarse en nuestro
            sitio web, se le solicitará su nombre, apellidos, género,
            dirección, número de teléfono, correo electrónico, así como
            cualquier otra información que BE ExEn considere pertinente para
            mejorar y ayudarle con su experiencia al navegar nuestro sitio.
          </p>

          <h2>Para qué usamos sus datos</h2>
          <p>BE ExEn utilizará sus datos personales para:</p>
          <ol>
            <li>Atender su solicitud de información, productos o servicios.</li>
            <li>Atender cualquier queja, pregunta o comentario.</li>
            <li>
              Enviarle notificaciones, avisos, propaganda o publicidad en la
              medida en que así lo permita la legislación aplicable.
            </li>
            <li>
              Enviarle información, así como noticias, comunicaciones o
              publicidad de BE ExEn.
            </li>
            <li>Crear bases de datos para fines estadísticos.</li>
            <li>
              Crear bases de datos para fines de investigación y desarrollo de
              nuevos productos o servicios.
            </li>
            <li>Enviarle notificaciones de cambios a este aviso de privacidad.</li>
          </ol>

          <h2>Sus derechos</h2>
          <p>
            Usted podrá solicitar acceder a sus datos, rectificarlos,
            cancelarlos, oponerse, limitar su uso o divulgación o revocar su
            consentimiento, en términos de la Ley Federal de Protección de
            Datos Personales en Posesión de los Particulares y demás
            disposiciones aplicables, contactando al Funcionario de
            Cumplimiento de Privacidad, al correo electrónico{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <p>
            Cualquier solicitud deberá indicar su nombre y domicilio para darle
            respuesta, una copia de su identificación oficial (pasaporte,
            credencial de elector o licencia de conducir), la descripción clara
            y precisa de los datos personales a los que desea acceder o que
            desea rectificar, cancelar u oponerse y cualquier otro elemento que
            facilite la localización de sus datos, así como cualquier otro
            requisito establecido por la Ley Federal de Protección de Datos
            Personales en Posesión de los Particulares y demás disposiciones
            aplicables.
          </p>

          <h2>Transferencia de datos</h2>
          <p>
            Nosotros nos reservamos el derecho de compartir sus datos
            personales con los miembros en colaboración de BE ExEn, quienes
            tratarán sus datos personales por cuenta de BE ExEn. Asimismo, nos
            reservamos el derecho de compartir sus datos personales con
            autoridades gubernamentales en los Estados Unidos Mexicanos o en el
            extranjero.
          </p>

          <h2>Cambios a este aviso</h2>
          <p>
            Nos reservamos el derecho de efectuar en cualquier momento
            modificaciones o actualizaciones al presente aviso de privacidad,
            para la atención de novedades legislativas o jurisprudenciales,
            políticas internas, nuevos requerimientos para la prestación u
            ofrecimiento de nuestros servicios o productos y prácticas de
            mercado. Estas modificaciones estarán disponibles al público a
            través de nuestra página de internet{" "}
            <Link href="/aviso-de-privacidad">{pageUrl}</Link>.
          </p>
          <p>
            Este aviso de privacidad se rige por la Ley Federal de Protección
            de Datos Personales en Posesión de los Particulares y las demás
            leyes y reglamentos de los Estados Unidos Mexicanos; siendo el
            Instituto Nacional de Transparencia, Acceso a la Información y
            Protección de Datos Personales el órgano federal encargado de
            salvaguardar los derechos a la protección de datos personales. La
            aceptación de este aviso de privacidad implica una aceptación de
            los términos del mismo y su sometimiento expreso a los tribunales
            de la Ciudad de Querétaro para cualquier controversia o reclamación
            derivada de este aviso de privacidad.
          </p>

          <h2>Uso de cookies</h2>
          <p>
            El sitio web be-exen.com utiliza la tecnología denominada
            «cookie». Una cookie es una pieza de información que se envía a su
            navegador web cuando visita un sitio web. Nuestras cookies ayudan a
            proporcionar funcionalidad adicional al sitio y auxilian a medir la
            utilización del sitio de forma más precisa.
          </p>
          <p>
            Su navegador web puede ser configurado de tal forma que le permita
            controlar si desea aceptar cookies, rechazarlas o notificarle cada
            vez que una cookie sea enviada a su navegador. Si la configuración
            de su navegador está habilitada para rechazar cookies, los sitios
            con cookies habilitados no lo reconocerán cuando vuelva a visitar
            un sitio web, y algunas de las funcionalidades del sitio pudieran
            perderse. La sección de ayuda de su navegador puede indicarle cómo
            controlar el uso de cookies.
          </p>

          <p className="legal-updated">Fecha de última actualización: 29 de mayo de 2020.</p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
