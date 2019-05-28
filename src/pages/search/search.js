import React from 'react';
import SearchBarExample from 'components/plugins/search';
import categorys from 'utils/categorys';
import './search.less';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: categorys.main_categorys || {},
    };
  }

  render() {
    const { searchData } = this.state;
    return (
      <div className="search-wrap">
        <SearchBarExample />
        <div className="search-name">
          {
            searchData.map((item) => {
              return (
                <div key={Math.random()}>
                  <h3>{item.category_name}</h3>
                  <ul>
                    {
                      item.subdivision_categorys.map((it) => {
                        return (
                          <li key={Math.random()}>
                            <img src={it.img} alt="" />
                            <p>{it.title}</p>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              );
            })
          }

        </div>
      </div>
    );
  }
}

export default Search;
