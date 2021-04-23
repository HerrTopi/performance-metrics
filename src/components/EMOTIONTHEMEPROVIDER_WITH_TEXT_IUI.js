import { EmotionThemeProvider } from '@instructure/emotion'
import { Text } from '@instructure/ui'

const EMOTIONTHEMEPROVIDER_WITH_TEXT_IUI = () => {
    return (
        <EmotionThemeProvider>
          <Text>Content</Text>
        </EmotionThemeProvider>
    )
}

export default EMOTIONTHEMEPROVIDER_WITH_TEXT_IUI