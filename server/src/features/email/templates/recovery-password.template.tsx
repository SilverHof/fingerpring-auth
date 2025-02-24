import {
	Body,
	Heading,
	Link,
	Tailwind,
	Text
} from '@react-email/components';
import { Html } from '@react-email/html';
import * as React from 'react';
import { SendTemplateProps } from './_types';


export function RecoveryPasswordTemplate({  token }: SendTemplateProps) {

	return (
		<Tailwind>
			<Html>
				<Body className='text-black'>
					<Heading>Сброс пароля</Heading>
					<Text>
						Привет! Вы запросили сброс пароля. Пожалуйста, перейдите по следующей ссылке, чтобы создать новый пароль:
					</Text>
					{/* <Link href={resetLink}>Подтвердить сброс пароля</Link> */}
					<Text>{token}</Text>
					<Text>
						Эта ссылка действительна в течение 1 часа. Если вы не запрашивали сброс пароля, просто проигнорируйте это сообщение.
					</Text>
				</Body>
			</Html>
		</Tailwind>
	);
}