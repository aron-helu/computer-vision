
const ComputerVision = (props) => {
    const listItems = props.data["plants"];
    const unique = (numbers) => {
        let arr = numbers.filter((item, index) => numbers.indexOf(item) === index);
        [arr[2], arr[3]] = [arr[3], arr[2]];
        return arr       
    }

    return (
        <div>
            <img src={props.data.image} alt="Plants data" useMap="#workmap" />
            <map  name="workmap">
                {listItems.map((item) => {
                    return (
                    <area key={item.plant_id} shape="rect"
                        coords={unique(item.detection_bbox)}
                        alt="computer vision"
                        title={`
                            id: ${item.plant_id + 1}
                            ${item["plant_detail"]["days_old"]} days old
                            ${item.plant_detail?.growth_rate_daily}% daily growth
                            ${item.plant_detail?.problem_detection}
                                            
                        `}
                    />
                    
                )})}
            </map>
        </div>
    );
};

export default ComputerVision;