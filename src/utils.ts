export const formatUserName = (userName: string): string => {
    const nextUserName =  userName.split('"')
    return nextUserName[1];
}

export const formatDates = (date: string | null): string => {
    if (!date) return 'Pendiente de entrega';
    const nextDate = date.split('T')[0];
    const monthsDictionary = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const monthIndex = Number(nextDate.split('-')[1]) - 1;
    const month = monthsDictionary[monthIndex];

    return `${nextDate.split('-')[2]} de ${month}`;
}

