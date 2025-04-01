function VisualizarTiempos(props){
    const {timeAxios, timeFetch} = props;
    return (
        <div className="VisualizarTiempos">
            <h2>Results in localStorage</h2>            
            <p><strong>Time Axios:</strong> {timeAxios} ms</p>
            <p><strong>Time Fetch:</strong> {timeFetch} ms</p>
        </div>
    );
}

export default VisualizarTiempos;