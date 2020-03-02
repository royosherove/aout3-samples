export interface IComplicatedLogger {
    info(text: string)

    debug(text: string, obj: any)

    warn(text: string)

    error(text: string, location: string, stacktrace: string)
}
