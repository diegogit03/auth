import { Edge } from 'edge.js'
import path from 'path'

const edge = new Edge()
edge.mount(path.resolve(__dirname, '..', 'views'))

export default edge
