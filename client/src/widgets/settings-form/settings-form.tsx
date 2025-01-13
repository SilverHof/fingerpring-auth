'use client'

import { Dispatch, SetStateAction, useMemo } from 'react'

import { SETTINGS, SettingsSection, useSettingsFingerprintQuery } from '@/src/features'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure } from '@nextui-org/react'

import { useUpdateSettingsFingerprint } from '@/src/features/settings/model/update-settings-fingerprint'

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

  const { data: settingsFingerprint, isLoading: isLoadingSettingsFingerprint } = useSettingsFingerprintQuery({
    enabled: isOpen,
  })

  const { mutate: updateSettingsFingerprint, isPending: isUpdatingSettingFingerprint } = useUpdateSettingsFingerprint()

  const { Form, getValues } = useFormInitializer({
    hookParams: {
      values: settingsFingerprint,
    },
  })

  const updatedSettings = useMemo(() => {
    if (!settingsFingerprint) return SETTINGS

    return SETTINGS.map((section) => ({
      ...section,
      items: Object.fromEntries(
        Object.entries(section.items).map(([key, item]) => {
          console.log('settingsFingerprint[key]', settingsFingerprint[key])
          return [
            key,
            {
              ...item,
              isActive: settingsFingerprint[key] ?? true, // Если ключ отсутствует в серверном ответе, устанавливаем false
            },
          ]
        })
      ),
    }))
  }, [settingsFingerprint, isLoadingSettingsFingerprint])

  const onSaveSettings = () => {
    updateSettingsFingerprint(getValues())
    onClose()
  }

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
        <Form>
          <DrawerHeader className='flex flex-col gap-1'>
            <h2 className='text-2xl'>Настройки Fingerprint</h2>
          </DrawerHeader>
          <DrawerBody>
            <div className='flex flex-col gap-8'>
              {updatedSettings.map(({ title, description, items }, index) => (
                <SettingsSection key={index} title={title} description={description} settingsItems={items} />
              ))}
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button
              color='danger'
              variant='light'
              isDisabled={isUpdatingSettingFingerprint}
              isLoading={isUpdatingSettingFingerprint}
              onPress={onClose}
            >
              Закрыть
            </Button>
            <Button
              color='primary'
              isDisabled={isUpdatingSettingFingerprint}
              isLoading={isUpdatingSettingFingerprint}
              onPress={onSaveSettings}
            >
              Сохранить настройки
            </Button>
          </DrawerFooter>
        </Form>
      </DrawerContent>
    </Drawer>
  )
}
