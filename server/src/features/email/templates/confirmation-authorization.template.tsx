import { Body, Heading, Html, Text } from '@react-email/components';
import * as React from 'react';
import { SendTemplateProps } from './_types';

export function ConfirmationAuthorizationTemplate({ token }: SendTemplateProps) {
  return (
    <Html>
      <Body
        style={{
          background: 'linear-gradient(to bottom, #232429, #1A1B1E)',
          color: '#E2E8F0',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '600px',
          margin: '0 auto',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Heading
          style={{
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#60A5FA',
            marginBottom: '16px',
          }}
        >
          Подтверждение входа
        </Heading>
        <Text
          style={{
            fontSize: '18px',
            color: '#94A3B8',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          Ваш код двухфакторной аутентификации:
        </Text>
        <Text
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#3B82F6',
            backgroundColor: '#1E40AF',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            display: 'inline-block',
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          {token}
        </Text>
        <Text
          style={{
            fontSize: '16px',
            color: '#94A3B8',
            marginTop: '24px',
            textAlign: 'center',
          }}
        >
          Пожалуйста, введите этот код в приложении для завершения процесса
          аутентификации.
        </Text>
        <Text
          style={{
            fontSize: '14px',
            color: '#64748B',
            marginTop: '16px',
            textAlign: 'center',
          }}
        >
          Если вы не запрашивали этот код, просто проигнорируйте это сообщение.
        </Text>
      </Body>
    </Html>
  );
}