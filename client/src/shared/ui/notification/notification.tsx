import { FC } from 'react'

import { toast, ToastPosition } from 'react-toastify'

import { ErrorIcon, InfoIcon, SuccessIcon } from '../../assets/svg'

export type NotifyType = 'success' | 'error' | 'info'

export interface NotificationProps {
  status?: NotifyType
  title?: string
  payload?: string
  icon?: FC
  position?: ToastPosition
}

export const Notification: FC<NotificationProps> = ({ status = 'success', title, payload, icon }) => {
  const DEFAULT_NOTIFICATION_BODY = {
    success: {
      title: 'Успешно',
      icon: SuccessIcon,
      iconStyle: 'stroke-green',
      color: 'green',
    },
    error: {
      title: 'Ошибка',
      icon: ErrorIcon,
      iconStyle: 'stroke-red',
      color: 'red',
    },
    info: {
      title: 'Инфо',
      icon: InfoIcon,
      iconStyle: 'stroke-gray',
      color: 'gray',
    },
  }
  const NotificationIcon = icon || DEFAULT_NOTIFICATION_BODY[status].icon
  return (
    <div
      className=' flex-col justify-center py-5 px-2 px-large max-w-[380px] w-full gap-base rounded-base bg-gradient-to-b from-[#202124] to-[#1A1B1E]'
      data-testid='notification'
    >
      <div className='flex gap-2.5 items-center'>
        <NotificationIcon
          data-testid='notification-icon'
          className={`flex-shrink-0 ${DEFAULT_NOTIFICATION_BODY[status].iconStyle}`}
          stroke={DEFAULT_NOTIFICATION_BODY[status].color}
        />
        <h2 className='text-white font-bold'>{title || DEFAULT_NOTIFICATION_BODY[status].title}</h2>
      </div>
      {payload && <h4 className='text-white text-text mt-3.5'>{payload}</h4>}
    </div>
  )
}

export const notify = (payload: string, settings?: Omit<NotificationProps, 'payload' | 't'>) => {
  console.log('payload', payload)
  return toast(<Notification {...settings} payload={payload} />, {
    position: settings?.position || 'bottom-right',
  })
}
