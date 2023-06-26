import React, { useEffect, useState } from 'react'
import mermaid from 'mermaid'
import { v4 as uuidv4 } from 'uuid'

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  deterministicIds: false,
})

const Mermaid = (props) => {
  const [svg, setSvg] = useState(null)

  useEffect(async () => {
    const theSvg = await mermaid.render('_' + uuidv4(), props.chart)
    setSvg(theSvg.svg)
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: svg }}></div>
}

export default Mermaid
