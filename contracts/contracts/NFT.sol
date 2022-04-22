pragma solidity 0.5.16;

import "./ERC721Full.sol";

contract NFT is ERC721Full {
    string[] public images;
    mapping(string => bool) images_list;
    mapping(string => uint256) auction;
    mapping(address => uint256[]) user_nft_id;
    mapping(uint256 => nft_detail) nft_details;
    struct nft_detail {
        string description;
        string status;
    }
    struct user {
        string _name;
        string _profilePic;
        string _coverPic;
        bool active;
    }
    mapping(address => user) _user_list;

    constructor() public ERC721Full("Universe.25", "UNIVERSE.25") {}

    function mint(string memory _image, string memory _description) public {
        require(!images_list[_image]);
        uint256 _id = images.push(_image);
        _mint(msg.sender, _id);
        images_list[_image] = true;
        user_nft_id[msg.sender].push(_id);
        nft_details[_id] = nft_detail(_description, "own");
    }

    function get_image(uint256 id) public view returns (string memory) {
        return images[id];
    }

    function createAccount(
        string memory __name,
        string memory __profilePic,
        string memory __coverPic
    ) public {
        require(!_user_list[msg.sender].active, "already have an account");
        _user_list[msg.sender] = user(__name, __profilePic, __coverPic, true);
    }

    function getAccountName() public view returns (string memory) {
        return _user_list[msg.sender]._name;
    }

    function getAccountProfilePic() public view returns (string memory) {
        return _user_list[msg.sender]._profilePic;
    }

    function getAccountCoverePic() public view returns (string memory) {
        return _user_list[msg.sender]._coverPic;
    }

    function getAccountNameByAddress(address _user_address)
        public
        view
        returns (string memory)
    {
        return _user_list[_user_address]._name;
    }

    function getAccountProfilePicByAddress(address _user_address)
        public
        view
        returns (string memory)
    {
        return _user_list[_user_address]._profilePic;
    }

    function getAccountCoverePicByAddress(address _user_address)
        public
        view
        returns (string memory)
    {
        return _user_list[_user_address]._coverPic;
    }

    function getMyNft() public view returns (uint256[] memory) {
        return user_nft_id[msg.sender];
    }

    function checkAccount() public view returns (bool) {
        return _user_list[msg.sender].active;
    }

    function checkAccountByAddress(address _user_address)
        public
        view
        returns (bool)
    {
        return _user_list[_user_address].active;
    }

    function getNftDescription(uint256 id) public view returns (string memory) {
        return nft_details[id].description;
    }

    function getBalance() public payable {
        
    }
}
