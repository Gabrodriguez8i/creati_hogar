export default defineNuxtPlugin((nuxtApp) => {

    return {
        provide:{
            util_formatDate: (dateInitial: Date, order: string = 'DMY'): string => {
                let date = new Date(dateInitial);

                // order format
                const options: Record<string, string> = {
                    DMY: 'dd/mm/yyyy',
                    MDY: 'mm/dd/yyyy',
                    YMD: 'yyyy/mm/dd'
                };
            
                const formatDateOptions = (date: Date, format: string): string => {
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    const year = String(date.getFullYear());
            
                    return format.replace('dd', day).replace('mm', month).replace('yyyy', year);
                };
                // return date with order format selected
                return formatDateOptions(date, options[order]);
            },

            util_calcularCostoReserva: (fechaInicio: string, fechaFin: string, priceBase = 0 ): number => {
                let date1 = new Date(fechaInicio);
                let date2 = new Date(fechaFin);

                // Calculating the time difference
                // of two dates
                let Difference_In_Time = date2.getTime() - date1.getTime();
               
                // Calculating the no. of days between
                // two dates
                let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
               
                // Difference_In_Days + first day 
                let daysSum = Difference_In_Days + 1;
              
                // return result
                return  daysSum  * priceBase;
            }
        }

    };

});