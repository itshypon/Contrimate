export default function Home() {
    return (
    <>
    <div className='row px-3'>
      <div className='col-4 px-2'>
        <div class="card text-bg-dark">
          {/* <img src={imgaddress} class="card-img-top card-" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <hr />
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='d-flex justify-content-around'>
              <a href="#" class="btn btn-dark">C</a>
              <a href="#" class="btn btn-dark">javaScript</a>
              <a href="#" class="btn btn-dark">Python</a>
            </div>
          </div>
        </div>
      </div>
      <div className='col-4 px-2'>
        <div class="card text-bg-dark">
          {/* <img src={imgaddress} class="card-img-top card-" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <hr />
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className='col-4 px-2'>
        <div class="card text-bg-dark">
          {/* <img src={imgaddress} class="card-img-top card-" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <hr />
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="" class="btn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}