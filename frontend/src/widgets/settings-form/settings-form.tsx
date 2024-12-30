'use client'

import { Dispatch, SetStateAction } from 'react'

import { SETTINGS, SettingsSection } from '@/src/features'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure } from '@nextui-org/react'

import { useFormInitializer } from '@/src/shared/libraries'

export interface SettingsFormProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const SettingsForm = ({ isOpen, setIsOpen }: SettingsFormProps) => {
  const { isOpen: isOpenDrawer, onClose } = useDisclosure({
    isOpen: isOpen,
    onClose: () => setIsOpen(false),
  })
  const { Form } = useFormInitializer({})

  return (
    <Drawer
      isOpen={isOpenDrawer}
      size='3xl'
      onClose={onClose}
      classNames={{
        body: 'border-l border-[#2A2A31]',
        header: 'border-l border-[#2A2A31]',
        footer: 'border-l border-[#2A2A31]',
      }}
    >
      <DrawerContent>
        {(onClose) => (
          <Form>
            <DrawerHeader className='flex flex-col gap-1'>
              <h2 className='text-2xl'>Настройки Fingerprint</h2>
            </DrawerHeader>
            <DrawerBody>
              <div className='flex flex-col gap-8'>
                {SETTINGS.map(({ title, description, items }, index) => (
                  <SettingsSection key={index} title={title} description={description} settingsItems={items} />
                ))}
              </div>
            </DrawerBody>
            <DrawerFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Закрыть
              </Button>
              <Button color='primary' onPress={onClose}>
                Сохранить настройки
              </Button>
            </DrawerFooter>
          </Form>
        )}
      </DrawerContent>
    </Drawer>
  )
}
