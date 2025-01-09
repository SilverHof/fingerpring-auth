import axios from 'axios'

import { Network } from './_types'

export const _getNetworkData = async (): Promise<Network> => {
  // API для получения данных об IP
  const accessKey = 'e717d043067d97feb502640156429fe5'
  const ipstackUrl = `https://api.ipstack.com/check?access_key=${accessKey}`

  try {
    const response = await axios.get<Network>(ipstackUrl)
    return response.data
  } catch (error) {
    console.error('Error fetching data from ipstack:', error)
    throw new Error('Failed to fetch IP data')
  }
}
