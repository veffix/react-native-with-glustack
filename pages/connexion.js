import { Pressable ,Input, InputField, InputInput, Text, Heading, Box, Button, ButtonText, RadioGroup, Radio, RadioIndicator, RadioIcon, RadioLabel, CircleIcon, ChevronDownIcon, SelectBackdrop, Select, SelectTrigger,SelectIcon,SelectPortal,SelectItem, SelectInput, Icon, SelectContent, SelectDragIndicatorWrapper,SelectDragIndicator  } from "@gluestack-ui/themed"
import { useState } from "react"

const Connexion = ( )=> {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

return (
    <>
    <Heading>Heading</Heading>
    <Button>
        <ButtonText>Hello World</ButtonText>
      </Button>
        <Text>Open up App.js to start working on your appzefezf!aaaaa</Text>
      <Box bg="$primary500" p='$20'>
  <Text color="white">This is the Box</Text>
  <Input
  variant="outline"
  size="md"
  isDisabled={false}
  isInvalid={false}
  isReadOnly={false}
>
  <InputField placeholder="Enter Text here" value={username} onChange={(e) => setUsername(e.target.value)} />
</Input>
<Input
  variant="outline"
  size="md"
  isDisabled={false}
  isInvalid={false}
  isReadOnly={false}
>
  <InputField type="password" placeholder="Enter Text here" value={password} onChange={(e) => setPassword(e.target.value)} />
</Input>
<Pressable
  onPress={() => console.log("Hello", username, password)}
  p="$5"
  bg="$primary500"
  sx={{ ":hover": { bg: "$primary400" } }}
>
  <Text color="white">Press me</Text>
</Pressable>
<Box width="100%">
<RadioGroup>
  <Radio value="change" size="md" isInvalid={false} isDisabled={false}>
    <RadioIndicator mr="$2">
      <RadioIcon as={CircleIcon} strokeWidth={1} />
    </RadioIndicator>
    <RadioLabel>Label</RadioLabel>
  </Radio>
</RadioGroup>

</Box></Box>
</>
)
}

export default Connexion