

const Home = () => {
    return (
      <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xs text-foundation-brand-brand-500 font-typography-styles-small-regular">
        <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_0px_8px_rgba(54,_89,_226,_0.16)] w-60 h-[1024px]" />
        <div className="absolute top-[0px] left-[240px] w-[1200px] h-[1024px] overflow-hidden">
          <img
            className="absolute top-[136px] left-[306.5px] w-0 h-[821px] object-contain"
            alt=""
            src="/line-1@2x.png"
          />
          <img
            className="absolute top-[136px] left-[600.5px] w-0 h-[821px] object-contain"
            alt=""
            src="/line-1@2x.png"
          />
          <img
            className="absolute top-[136px] left-[894.5px] w-0 h-[821px] object-contain"
            alt=""
            src="/line-1@2x.png"
          />
          <div className="absolute top-[84px] left-[24px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="rounded-xl bg-foundation-brand-brand-50 h-8 flex flex-row items-center justify-center py-1 px-3 box-border">
                <div className="flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-2 h-2 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/circlef@2x.png"
                  />
                  <div className="relative leading-[20px]">To Do</div>
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start gap-[24px] text-base text-black">
              <div className="rounded-lg bg-white shadow-[0px_0px_8px_rgba(54,_89,_226,_0.16)] w-[270px] overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-[10px]">
                <div className="relative leading-[24px] font-semibold">
                  Create a To-Do App
                </div>
                <div className="flex flex-row items-start justify-start gap-[24px] text-xs text-foundation-text-colors-secondary-text-color">
                  <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative leading-[20px]">Start date</div>
                    <div className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
                      <div className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
                        <div className="flex flex-row items-center justify-center gap-[4px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/sparkle@2x.png"
                          />
                          <div className="relative leading-[20px]">
                            01/12/2023
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-foundation-brand-brand-50 h-6 hidden flex-row items-center justify-center py-1 px-2 box-border">
                        <div className="flex flex-row items-center justify-center gap-[4px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/user@2x.png"
                          />
                          <div className="relative leading-[20px]">Completed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative leading-[20px]">Deadline</div>
                    <div className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
                      <div className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
                        <div className="flex flex-row items-center justify-center gap-[4px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/sparkle@2x.png"
                          />
                          <div className="relative leading-[20px]">
                            06/12/2023
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-foundation-brand-brand-50 h-6 hidden flex-row items-center justify-center py-1 px-2 box-border">
                        <div className="flex flex-row items-center justify-center gap-[4px]">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/user@2x.png"
                          />
                          <div className="relative leading-[20px]">Completed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-start justify-start text-xs text-foundation-brand-brand-500">
                <div className="rounded-lg bg-foundation-brand-brand-50 w-[270px] h-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[4px]">
                  <img
                    className="relative w-3 h-3 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/plus@2x.png"
                  />
                  <div className="flex flex-row items-center justify-center py-0 px-2">
                    <div className="relative leading-[20px]">Add new</div>
                  </div>
                  <img
                    className="relative w-3 h-3 overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/chevron-right@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[84px] left-[318px] shrink-0 flex flex-col items-start justify-start gap-[20px] text-secondary-colour-pink-pink-500">
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="rounded-xl bg-secondary-colour-pink-pink-50 h-8 flex flex-row items-center justify-center py-1 px-3 box-border">
                <div className="flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-2 h-2 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/circlef@2x.png"
                  />
                  <div className="relative leading-[20px]">In Progress</div>
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="rounded-lg bg-secondary-colour-pink-pink-50 w-[270px] h-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[4px]">
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/plus@2x.png"
                />
                <div className="flex flex-row items-center justify-center py-0 px-2">
                  <div className="relative leading-[20px]">Add new</div>
                </div>
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src="/chevron-right@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[84px] left-[612px] shrink-0 flex flex-col items-start justify-start gap-[20px] text-foundation-info-info-500">
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="rounded-xl bg-foundation-info-info-50 h-8 flex flex-row items-center justify-center py-1 px-3 box-border">
                <div className="flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-2 h-2 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/circlef@2x.png"
                  />
                  <div className="relative leading-[20px]">In Review</div>
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="rounded-lg bg-secondary-colour-blue-blue-50 w-[270px] h-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[4px]">
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/plus@2x.png"
                />
                <div className="flex flex-row items-center justify-center py-0 px-2">
                  <div className="relative leading-[20px]">Add new</div>
                </div>
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src="/chevron-right@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[84px] left-[906px] shrink-0 flex flex-col items-start justify-start gap-[20px] text-foundation-success-success-500">
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="rounded-xl bg-foundation-success-success-50 h-8 flex flex-row items-center justify-center py-1 px-3 box-border">
                <div className="flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="relative w-2 h-2 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/circlef@2x.png"
                  />
                  <div className="relative leading-[20px]">Completed</div>
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="rounded-lg bg-foundation-success-success-50 w-[270px] h-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[4px]">
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/plus@2x.png"
                />
                <div className="flex flex-row items-center justify-center py-0 px-2">
                  <div className="relative leading-[20px]">Add new</div>
                </div>
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src="/chevron-right@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] box-border w-[1200px] shrink-0 flex flex-row items-center justify-start py-4 px-6 text-lg text-foundation-text-colors-primary-text-color border-b-[1px] border-solid border-foundation-brand-brand-50">
            <div className="relative leading-[28px] font-semibold">
              Freelance Project
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[24px] text-lg text-foundation-text-colors-primary-text-color">
          <div className="box-border w-60 shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-[10px] border-b-[1px] border-solid border-foundation-brand-brand-50">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/ghostorg@2x.png"
            />
            <b className="relative leading-[28px]">Task boards</b>
          </div>
          <div className="w-60 flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[10px] text-base">
            <div className="self-stretch rounded-lg bg-foundation-brand-brand-50 flex flex-row items-center justify-start py-2.5 px-6">
              <div className="relative leading-[24px]">Freelance Project</div>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start py-2.5 px-6">
              <div className="relative leading-[24px]">SBI Outsource</div>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start py-2.5 px-6">
              <div className="relative leading-[24px]">HPCL Project 1</div>
            </div>
          </div>
          <div className="self-stretch bg-white box-border h-8 flex flex-row items-center justify-start py-2.5 px-6 gap-[10px] text-xs text-foundation-brand-brand-500 border-t-[1px] border-solid border-foundation-brand-brand-50">
            <img
              className="relative w-3 h-3 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/plus@2x.png"
            />
            <div className="relative leading-[20px]">Add new Project</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;