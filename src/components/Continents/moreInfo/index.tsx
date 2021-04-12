import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Icon
} from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'

export default function MoreInfo() {
    return (
        <Popover placement="right">
            <PopoverTrigger>
                <Icon w="16px" as={FiInfo} />
            </PopoverTrigger>

            <PopoverContent>
            <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confira mais cidades !!!</PopoverHeader>
                <PopoverBody>
                    Ligue para 00 1234-1234 para solicitar outras viagens !!!
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}