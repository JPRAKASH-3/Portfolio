import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      page = "/",
      referrer = "Direct",
      userAgent = "Unknown",
      language = "Unknown",
      screen = "Unknown",
      timezone = "Unknown",
    } = req.body || {};

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.headers["x-real-ip"] ||
      "Unknown";

    const now = new Date();

    const visitTime = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "long",
    });

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.NOTIFICATION_EMAIL],
      subject: "👀 New Portfolio Visitor",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
            <div style="max-width: 650px; margin: auto; padding: 24px;">
              
              <h2 style="margin-bottom: 20px;">
                👀 New Portfolio Visitor
              </h2>

              <p>
                Someone has opened your portfolio.
              </p>

              <table
                style="
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 20px;
                "
              >
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    <strong>Time</strong>
                  </td>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    ${escapeHtml(visitTime)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    <strong>Page</strong>
                  </td>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    ${escapeHtml(page)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    <strong>Referrer</strong>
                  </td>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    ${escapeHtml(referrer)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    <strong>IP</strong>
                  </td>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    ${escapeHtml(ip)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    <strong>Device</strong>
                  </td>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    ${escapeHtml(userAgent)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    <strong>Screen</strong>
                  </td>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    ${escapeHtml(screen)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    <strong>Language</strong>
                  </td>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    ${escapeHtml(language)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    <strong>Timezone</strong>
                  </td>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    ${escapeHtml(timezone)}
                  </td>
                </tr>
              </table>

              <p style="margin-top: 25px; color: #666; font-size: 13px;">
                Portfolio visitor notification.
              </p>

            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Email could not be sent",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Visitor notification sent",
      id: data?.id,
    });
  } catch (error) {
    console.error("Visitor API error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}