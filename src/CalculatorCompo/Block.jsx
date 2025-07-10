export function Block({ ele }) {
    return (
        <div>
            <button style={{ border: '1px solid black', width: '150px', height: '50px', alignItems: 'center', fontSize: '20px' }}>
                {ele}
            </button>
        </div>
    );
}