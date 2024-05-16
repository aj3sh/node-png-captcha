import svgCaptcha, { ConfigObject, CaptchaObj } from 'svg-captcha'
import { Resvg } from '@resvg/resvg-js'

interface CaptchaResponse {
    text: string
    width: number
    height: number
    image: Buffer
}

/**
 * Generates a captcha image and returns its data.
 * @param {CreateOptions} args - Options for captcha creation.
 * @returns {CaptchaResponse} - The generated captcha data.
 */
const create = (args?: ConfigObject): CaptchaResponse => {
    const captcha: CaptchaObj = svgCaptcha.create(args)
    const resvg = new Resvg(captcha.data)
    const pngData = resvg.render()
    const pngBuffer = pngData.asPng()

    return {
        text: captcha.text,
        width: pngData.width,
        height: pngData.height,
        image: pngBuffer,
    }
}

export default { create }
