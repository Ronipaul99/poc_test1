const styles = {
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        marginLeft: "200px",
        height: "100vh",
        backgroundColor: "hsl(0deg 0% 96%)"
    },
    Box1: {
        width: "80%",
        marginTop: "90px"
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
    },
    Li: {
        p: 2,
        height: "50px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "grey",
        width: "100%",
        borderWidth: 2,
        borderRadius: 2,
        marginTop: "10px"
    },
    Hed: {
        display: "flex",
        alignItems: "center"
    },
    Text1: {
        fontSize: "30px",
        fontWeight: "bold"
    },
    List: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'black',
        borderStyle: "double",
        p: 2
    },
    Btn: {
        marginTop: "8px"
    },
    SearchSec: {
        width: "100%",
        marginTop: "30px"
    },
    B1: {
        height: "100%",
        width: "100%",
        display: "flex"
    },
    B2: {
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    SearchB: {
        width: "20%",
        display: "flex",
        justifyContent: "flex-end"
    }
};
export default styles;