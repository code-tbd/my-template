import { defineStore } from 'pinia'

import store from './index'
import { RootState } from '@/model/store'

const useRootStore = defineStore('root', {
  state: (): RootState => ({
    token: ''
  }),
  actions: {}
})

const useRootStoreWithOut = () => {
  return useRootStore(store)
}

export { useRootStore, useRootStoreWithOut }
