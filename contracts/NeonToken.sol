// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NeonToken is ERC20 {
    constructor() ERC20("Neon", "NEON") {
        _mint(msg.sender, 10000000000000 * (10 ** decimals()));
    }
}
