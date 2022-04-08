tns({
    loop: false,
    controls: false,
    navPosition: 'bottom',
    navContainer: '.slider__nav',
    speed: 700,
    items: 1,
    edgePadding: 0,
    responsive: {
        400: {
            edgePadding: 40
        },
        770: {
            edgePadding: 150,
        },
        994: {
            items: 2,
            gutter: 10,
            edgePadding: 50,
        },
        1265: {
            items: 2,
            edgePadding: 60,
        },
        1266: {
            items: 3,
            edgePadding: 10,
        },
        1280: {
            items: 3,
            edgePadding: 5
        }
    }
});