export const excludeHashLink = (id: string | undefined) => {
    if (typeof document !== undefined && id) {
        const element = document.getElementById(id)?.getBoundingClientRect()?.top;
        const scrollOptions: ScrollToOptions = {
            left: 0,
            top: element ? element : 0,
            behavior: 'smooth'
        };
        setTimeout(() => document.getElementById('content-main')?.scroll(scrollOptions), 100);
    }
};