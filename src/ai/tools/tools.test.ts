/**
 * @file src/ai/tools/tools.test.ts
 * @description Unit test suite for the AI Tool Registry and Wallet Tools.
 */

import {
  ToolRegistry,
  GetBalanceTool,
  GetTransactionsTool,
  SendPaymentTool,
  CreatePaymentRequestTool,
  GenerateQRCodeTool,
  ScanQRCodeTool,
  GetPortfolioTool,
} from './index';

export async function runToolRegistryUnitTests() {
  const registry = new ToolRegistry();

  // Register all 7 wallet tools
  registry.registerTools([
    new GetBalanceTool(),
    new GetTransactionsTool(),
    new SendPaymentTool(),
    new CreatePaymentRequestTool(),
    new GenerateQRCodeTool(),
    new ScanQRCodeTool(),
    new GetPortfolioTool(),
  ]);

  // Test 1: Verify all 7 tools are registered
  const tools = registry.listTools();
  if (tools.length !== 7) {
    throw new Error(`Test 1 Failed: Expected 7 registered tools, found ${tools.length}`);
  }

  // Test 2: OpenAI Schema Export Verification
  const schemas = registry.exportOpenAISchemas();
  if (schemas.length !== 7) {
    throw new Error(`Test 2 Failed: Expected 7 OpenAI schemas`);
  }

  const getBalanceSchema = schemas.find((s) => s.function.name === 'getBalance');
  if (!getBalanceSchema || getBalanceSchema.type !== 'function') {
    throw new Error(`Test 2 Failed: getBalance schema invalid`);
  }

  // Test 3: Verify tool parameter properties
  const sendPaymentSchema = schemas.find((s) => s.function.name === 'sendPayment');
  if (
    !sendPaymentSchema ||
    !sendPaymentSchema.function.parameters.properties.recipientAddress ||
    !sendPaymentSchema.function.parameters.required?.includes('recipientAddress')
  ) {
    throw new Error(`Test 3 Failed: sendPayment parameters schema invalid`);
  }

  // Test 4: Tool Execution Contract
  const context = { sessionId: 'test-session-1', timestamp: Date.now() };
  const execResult = await registry.executeTool('getBalance', { assetSymbol: 'NIM' }, context);
  if (!execResult.success) {
    throw new Error(`Test 4 Failed: getBalance tool execution contract failed`);
  }

  // Test 5: Dynamic Tool Registration Extension
  registry.registerTool(new GetBalanceTool());
  if (registry.listTools().length !== 7) {
    throw new Error(`Test 5 Failed: Re-registration count mismatch`);
  }

  console.log('✅ ALL AI TOOL REGISTRY UNIT TESTS PASSED (5/5)');
}

runToolRegistryUnitTests().catch((err) => {
  console.error(err);
  throw err;
});
