
import { GluestackUIProvider , Text, Box, Button, ButtonText, RadioGroup, Radio, RadioIndicator, RadioIcon, RadioLabel, CircleIcon, ChevronDownIcon, SelectBackdrop, Select, SelectTrigger,SelectIcon,SelectPortal,SelectItem, SelectInput, Icon, SelectContent, SelectDragIndicatorWrapper,SelectDragIndicator  } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import Connexion from "./connexion"
export default function App() {

  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center" height='100%'>
      <Connexion />
</Box>
    </GluestackUIProvider>
  )
}