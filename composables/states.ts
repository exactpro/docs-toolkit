import { Toc, ParsedContent } from "@nuxt/content/dist/runtime/types"
import { Ref } from 'vue'

export const useToc = () => useState<Toc | null>('toc', () => null)
export const useShowContentTree = () => useState<boolean>('showContentTree', () => false)
export const useTermPopup = () => {
  const model = useState<{
      show: boolean,
      ref: HTMLElement | null
      content: Ref<Pick<ParsedContent, string> | null>
    }>('term-popup', () => ({ show: false, ref: null, content: ref(null) }))
  const isFocused = useState(() => false)
  return {
    model, isFocused
  }
} 