export const resetPasswordTemplate = (resetUrl: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Password Reset</title>
</head>

<body style="margin:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">
  <div style="padding:24px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <table role="presentation"
            width="520"
            cellspacing="0"
            cellpadding="0"
            style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 8px 28px rgba(0,0,0,.06);"
          >

            <!-- Header -->
            <tr>
              <td style="background:#4f46e5;padding:18px 22px;">
                <h1 style="margin:0;font-size:18px;color:#ffffff;font-weight:700;">
                  LMS — Password Security
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:22px 22px 10px 22px;color:#222;">
                <h2 style="margin:0 0 10px 0;font-size:20px;font-weight:700;">
                  Reset Your Password
                </h2>

                <p style="margin:0 0 12px 0;line-height:1.6;color:#555;">
                  We received a request to reset your password. If this was you,
                  click the button below to create a new one.
                </p>

                <p style="margin:0 0 12px 0;line-height:1.6;color:#555;">
                  For security reasons, this link will expire in <b>15 minutes</b>.
                </p>

                <!-- Button -->
                <p style="margin:18px 0;">
                  <a href="${resetUrl}"
                    style="background:#4f46e5;padding:12px 18px;border-radius:6px;
                           color:#ffffff;text-decoration:none;font-weight:600;
                           display:inline-block;">
                    Reset Password
                  </a>
                </p>

                <!-- Fallback link -->
                <p style="margin:12px 0;color:#777;font-size:13px;">
                  If the button doesn’t work, copy and paste this link into your browser:
                </p>

                <p style="background:#f3f4f6;padding:10px;border-radius:6px;
                          word-break:break-all;font-size:12px;color:#333;">
                  ${resetUrl}
                </p>

                <p style="margin:12px 0 4px 0;color:#777;line-height:1.6;font-size:13px;">
                  If you didn’t request this, you can safely ignore this email —
                  your account is still secure.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:14px 22px;border-top:1px solid #eee;background:#fafafa;">
                <p style="margin:0;font-size:12px;color:#888;">
                  © ${new Date().getFullYear()} LMS System — All rights reserved
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
`;
