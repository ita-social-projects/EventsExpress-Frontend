import React, { useEffect } from "react";
import propTypes from "prop-types";
import CategoryAddContainer from "../../containers/CategoryContainers/CategoryAddContainer";
import CategoryListContainer from "../../containers/CategoryContainers/CategoryListContainer";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";

const Categories = ({
  categories,
  categoryGroups,
  getCategories,
  getCategoryGroups,
}) => {
  useEffect(() => {
    getCategoryGroups();
    getCategories();
  }, []);

  return (
    <div>
      <table className="table w-100 m-auto">
        <tbody>
          <CategoryAddContainer
            item={{
              name: "",
              id: "00000000-0000-0000-0000-000000000000",
              categoryGroupId: {
                id: "00000000-0000-0000-0000-000000000000",
                title: "",
              },
            }}
            groups={categoryGroups}
          />
          <SpinnerContainer
            showContent={
              categories !== undefined && categoryGroups !== undefined
            }
          >
            <CategoryListContainer data={categories} />
          </SpinnerContainer>
        </tbody>
      </table>
    </div>
  );
};

Categories.propTypes = {
  getCategoryGroups: propTypes.func,
  getCategories: propTypes.func,
  categories: propTypes.array,
  categoryGroups: propTypes.array,
};

Categories.defaultProps = {
  getCategoryGroups: () => {},
  getCategories: () => {},
  categories: [],
  categoryGroups: [],
};

export default Categories;
