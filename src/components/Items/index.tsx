import { color, Flex, Image, ListItem, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import { Unit } from "./unit";

export function Items() {
  const isWideScreen = useBreakpointValue({
    sm: true
  })

  return (
    <Flex align="center" justify="space-evenly" my={["2rem", "6rem"]}>
      {isWideScreen ?
        <>
          <Unit imgSrc="cocktail">vida noturna</Unit>
          <Unit imgSrc="beach">praia</Unit>
          <Unit imgSrc="building">moderno</Unit>
          <Unit imgSrc="museum">museum</Unit>
          <Unit imgSrc="earth">e mais...</Unit>
        </>
        : (
          <>
            <Flex flexDirection="column" w="70%">
              <UnorderedList d="flex" justifyContent="space-between" mb="1rem">
                <ListItem fontWeight="500" fontSize="1rem">
                  vida noturna
          </ListItem>
                <ListItem fontWeight="500" fontSize="1rem">
                  praia
          </ListItem>
              </UnorderedList>

              <UnorderedList d="flex" justifyContent="space-between">
                <ListItem fontWeight="500" fontSize="1rem">
                  moderno
          </ListItem>
                <ListItem fontWeight="500" fontSize="1rem">
                  museum
          </ListItem>
              </UnorderedList>

              <UnorderedList d="flex" justifyContent="center" mt="1rem">
                <ListItem fontWeight="500" fontSize="1rem">
                  e mais...
          </ListItem>
              </UnorderedList>
            </Flex>
          </>
        )}
    </Flex>
  )
}