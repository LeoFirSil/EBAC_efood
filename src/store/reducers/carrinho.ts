import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Refeicao } from '../../pages/Home'

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
        alert('Produto adicionado ao carrinho!')
      } else {
        alert('já possui esse item no carrinho')
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((comida) => comida.id !== action.payload)
    },
    limpar: (state) => {
      state.itens = []
    }
  }
})

export const { adicionar, remover, limpar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
