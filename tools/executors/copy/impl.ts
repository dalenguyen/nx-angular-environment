import { ExecutorContext, logger } from '@nrwl/devkit'
import { promisify } from 'util'
import * as copyfiles from 'copyfiles'

export interface CopyExecutorOptions {
    flat?: boolean
    all?: boolean
    soft?: boolean
    error?: boolean
}

export interface CopyExecutorConfiguration {
    fileReplacements: {
        from: string
        to: string
    }[]
}



/**
 * Copies files from specified glob to destination. Uses `copyfiles` library internally.
 * @param options 
 * @param context 
 * 
 * @returns
 */

const copyExecutor = async (options: CopyExecutorOptions, context: ExecutorContext) => {
    console.info(`Executing "copy"...`)
    console.info(`Options: ${JSON.stringify(options, null, 2)}`)

    let success: boolean

    const configuration = context.target.configurations[context.configurationName] as CopyExecutorConfiguration
    for await (const replacement of configuration.fileReplacements) {
        try {
            logger.debug('Copying files now', replacement.from, replacement.to)
            const copyPromise = promisify<string[], copyfiles.Options | number>(copyfiles) as any

            const copyOptions: copyfiles.Options = {
                all: options.all,
                soft: options.soft,
                error: options.error,
            }

            // @see https://github.com/calvinmetcalf/copyfiles/issues/86
            // flat is mapped to "up", and up has the wrong type to only accept "true"
            if (!!options.flat) {
                copyOptions.up = options.flat
            }

            const error = (await copyPromise([replacement.from, replacement.to], copyOptions)) as any as copyfiles.Callback

            if (error) {
                logger.error(error)
                success = false
            }
            success = true
        } catch (e) {
            logger.error(e.message)
            success = false
        }
    }

    return { success }
}

const copyAndReplaceExecutor = async (options: CopyExecutorOptions, context: ExecutorContext) => {
    const copySuccess = await copyExecutor(options, context)
    if (!copySuccess.success) {
        return { success: false }
    }
    return { success: true }
}

export default copyAndReplaceExecutor