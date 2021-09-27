import { Buffer } from 'buffer'
import process from 'process/browser.js'

window.global = window
window.global.Buffer = Buffer
window.global.process = process
