
const interval = setInterval(() => {
    let elementHubSpotEditor = document.querySelector('.CodeMirror')
    
    let urlCustomCode = window.location.href

    let isHubspot = urlCustomCode.indexOf('app.hubspot.com')
    let isWorkFlow = urlCustomCode.indexOf('workflows')
    let isCustomCode = urlCustomCode.indexOf('custom-code')

    if (isHubspot > 0 && isWorkFlow > 0 && isCustomCode > 0) {
        let elementHubSpotPainel = document.querySelector('.private-panel--right')
        elementHubSpotPainel.setAttribute('style', 'width: 100vw')
       
        elementHubSpotEditor.classList.add('cm-s-hubspot-canvas-dark')
        elementHubSpotEditor.classList.remove('cm-s-hubspot-canvas-light')

        clearInterval(interval)
    }
}, 1000)






