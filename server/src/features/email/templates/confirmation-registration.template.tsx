import { Body, Heading, Html, Link, Text, Button, Section } from "@react-email/components";
import * as React from "react";
import { SendTemplateProps } from "./_types";

export function ConfirmationRegistrationTemplate({ token }: SendTemplateProps) {
  return (
    <Html>
      <Body
        style={{
          background: "linear-gradient(to bottom, #232429, #1A1B1E)",
          color: "#E2E8F0",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Heading
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#60A5FA",
            marginBottom: "16px",
          }}
        >
          Подтверждение регистрации
        </Heading>
        <Text
          style={{
            fontSize: "18px",
            color: "#94A3B8",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Для завершения регистрации используйте одноразовый код подтверждения:
        </Text>
        <Section
          style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: "18px",
              color: "#ffffff",
              backgroundColor: "#1E40AF",
              padding: "10px 20px",
              borderRadius: "8px",
              textAlign: "center",
              width: "fit-content",
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
              cursor: "pointer",
            }}
          >
            {token}
          </Text>
        </Section>
        <Text
          style={{
            fontSize: "16px",
            color: "#94A3B8",
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          Эта код действителен в течение 5 минут. Если вы не запрашивали
          подтверждение, просто проигнорируйте это сообщение.
        </Text>
      </Body>
    </Html>
  );
}
