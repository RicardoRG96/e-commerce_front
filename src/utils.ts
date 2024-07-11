export const formatUserName = (userName: string): string => {
    const nextUserName =  userName.split('"')
    return nextUserName[1];
}