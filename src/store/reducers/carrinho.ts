import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Refeicao from '../../models/Refeicao'

type CarrinhoState = {
  itens: Refeicao[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Refeicao>) => {
      const comidaCarrinho = action.payload

      const existe = state.itens.find(
        (comida) => comida.id === comidaCarrinho.id
      )

      if (!existe) {
        state.itens.push(comidaCarrinho)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((comida) => comida.id !== action.payload)
    }
  }
})

export const { adicionar, remover } = carrinhoSlice.actions
export default carrinhoSlice.reducer
