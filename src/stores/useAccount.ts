import { defineStore } from 'pinia'

function accountInitialState () {
  return {
    account: null
  }
}

const useAccount = defineStore('account', {
  state: accountInitialState
})

export default useAccount