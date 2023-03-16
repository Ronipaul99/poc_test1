const styles = {
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        marginLeft: "200px",
        backgroundColor: "hsl(0deg 0% 96%)"
    },
    Box1: {
        width: "80%",
        marginTop:"90px"
    },
    Box2: {
        marginTop: "50px",
        width: "100%"
    },
    Box3: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: "150px",
        justifyContent: "center"
    },
    FBox: {
        marginTop: "150px"
    },
    baseStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    }

};
export default styles;