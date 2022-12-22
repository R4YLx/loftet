import Button from '@components/Button'
import Headline from '@components/Headline'
import Text from '@components/Text'

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Headline element="h1" size="xl">
            TESTING HEADLINE XL <br /> ON TWO ROWS
          </Headline>
          <Headline element="h2" size="lg">
            TESTING HEADLINE LG <br /> ON TWO ROWS
          </Headline>
          <Headline element="h3" size="md">
            TESTING HEADLINE MD <br /> ON TWO ROWS
          </Headline>
          <Headline element="h4" size="sm">
            TESTING HEADLINE SM <br /> ON TWO ROWS
          </Headline>
        </div>

        <br />

        <div>
          <Text element="p" size="xl">
            Testing Text XL <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <br />

          <Text element="p" size="lg">
            Testing Text LG <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <br />
          <br />
          <Text element="p" size="md">
            Testing Text MD <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <br />
          <br />
          <Text element="p" size="sm">
            Testing Text SM <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </div>

        <br />

        <div>
          <Button dark>
            <Text element="p" size="md">
              Shop all jackets
            </Text>
          </Button>

          <br />
          <br />

          <Button light>
            <Text element="p" size="md">
              Shop all denim
            </Text>
          </Button>

          <br />
          <br />

          <Button bgDark isFluid>
            <Text element="p" size="md">
              Add to cart
            </Text>
          </Button>

          <br />
          <br />

          <Button bgDark>
            <Text element="p" size="md">
              Check out
            </Text>
          </Button>
        </div>
      </main>
    </>
  )
}
