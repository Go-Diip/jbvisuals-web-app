import React from "react"
import * as S from "./home-intro-text.styles"
import parse from "html-react-parser"
import Typewriter from "typewriter-effect"
import Typography from "@mui/material/Typography"

const HomeIntroText = ({}) => {
  return (
    <S.Wrapper contained>
      <Typography>
        Hello, this is jbvisuals <br />
        We help translate your{" "}
        <Typewriter
          options={{
            strings: ["public space design", "architecture", "interior design"],
            autoStart: true,
            loop: true,
          }}
        />
        <br /> into a real visual concept.
      </Typography>
    </S.Wrapper>
  )
}
export default HomeIntroText
