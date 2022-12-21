import Headline from '@components/Headline'

export default function Home() {
  return (
    <>
      <main>
        <Headline element="h1" size="xl">
          TESTING HEADLINE XL
        </Headline>
        <Headline element="h2" size="lg">
          TESTING HEADLINE LG
        </Headline>
        <Headline element="h3" size="md">
          TESTING HEADLINE MD
        </Headline>
        <Headline element="h4" size="sm">
          TESTING HEADLINE SM
        </Headline>
      </main>
    </>
  )
}
