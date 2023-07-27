export const openNewWindow = url => {
    const windowWidth = 500
    const windowHeight = 600

    const left = (window.screen.width - windowWidth) / 2
    const top = (window.screen.height - windowHeight) / 2

    const newWindow = window.open(
        url,
        'Login',
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${windowWidth}, height=${windowHeight}, top=${top}, left=${left}`,
    )

    window.addEventListener('message', event => {
        if (event.source !== newWindow) {
            return
        }

        if (event.data === 'success') {
            window.location.replace('/')
        }
    })
}

export const formatNumber = num => {
    return num.toLocaleString('de-DE')
}

export const formatDate = dateString => {
    const date = new Date(dateString)
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${month}/${year}`
}

const langs = { spanish: 'Español', english: 'Inglés' }
export const getLanguage = lang => {
    return langs[lang]
}

const convertToSeconds = time => {
    const [minutes, seconds] = time.split(':').map(Number)
    return minutes * 60 + seconds
}

export const getTotalContentTime = sections => {
    if (!Array.isArray(sections)) {
        sections = [sections]
    }

    let totalSeconds = 0
    for (const section of sections) {
        for (const episode of section.episodes) {
            totalSeconds += convertToSeconds(episode.duration)
        }
    }

    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)

    return hours > 0 ? `${hours} h ${minutes} m` : `${minutes} m`
}

export const transformToCommaDecimal = number => {
    return number.toFixed(1).replace('.', ',')
}
