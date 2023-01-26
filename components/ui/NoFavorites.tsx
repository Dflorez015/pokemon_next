import { Container, Image, Text } from "@nextui-org/react"
import { HeadLayout } from "../layouts"

export const NoFavorites = () => {
    return (
        <HeadLayout headTitle='Pokémones favoritos'>
            <Container css={{ display: "flex", flexDirection: "column", height: "calc(100%-100px)", alignItems: "center", justifyContent: "center", alignSelf: "center" }}>
                <Text h1> No hay favoritos </Text>
                <Image src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9cf47466-daa8-4613-9873-47d09f0636f5/d614675-b1fcc01d-feeb-46db-a253-98a0c92f762e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljZjQ3NDY2LWRhYTgtNDYxMy05ODczLTQ3ZDA5ZjA2MzZmNVwvZDYxNDY3NS1iMWZjYzAxZC1mZWViLTQ2ZGItYTI1My05OGEwYzkyZjc2MmUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JMh1P18kDYHkeF8SysUWarOF1gOHpQ2pBtt8_hJlkug'
                    width={250}
                    height={250}
                    css={{ opacity: 0.4 }}
                />
            </Container>
        </HeadLayout>
    )
}